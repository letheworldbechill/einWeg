import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../services/firebase';

const ArticlesScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const snapshot = await db.collection('articles').get();
      setArticles(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.articleCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content.substring(0, 100)}...</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eaf6ff',
  },
  articleCard: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d80',
  },
  content: {
    marginTop: 8,
    fontSize: 14,
    color: '#006bb3',
  },
});

export default ArticlesScreen;
