import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

const cache = {
  clients: null,
  products: null,
  blogs: null,
  lastFetched: null,
};

const cacheExpirationTime = 5 * 60 * 1000; // 5 minutes

const fetchDataFromCacheOrFirestore = async (query, cacheKey) => {
  const currentTime = Date.now();
  
  if (cache[cacheKey] && (currentTime - cache.lastFetched) < cacheExpirationTime) {
    return cache[cacheKey];
  }

  const snapshot = await getDocs(query);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
  cache[cacheKey] = data;
  cache.lastFetched = currentTime;

  return data;
};

const Database = () => {
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const clientsQuery = query(collection(firestore, 'TP_Clients'), where('availability', '==', true));
        const productsQuery = query(
          collection(firestore, 'TP_Albums'),
  where('availability', '==', true),
  limit(4)
);

        const blogsQuery = query(
  collection(firestore, 'TP_Blogs'),
  where('availability', '==', true),
  limit(2)
);
        const [clientsData, productsData, blogsData] = await Promise.all([
          fetchDataFromCacheOrFirestore(clientsQuery, 'clients'),
          fetchDataFromCacheOrFirestore(productsQuery, 'products'),
          fetchDataFromCacheOrFirestore(blogsQuery, 'blogs'),
        ]);

        setClients(clientsData);
        setProducts(productsData);
        setBlogs(blogsData);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { clients, products, blogs, loading, error };
};

export default Database;
