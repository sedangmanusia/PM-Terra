import React from 'react';
import { ScrollView, View, ImageBackground, Text, StyleSheet } from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import { fontType, colors } from '../theme';

const ListBlog = ({ blogData }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.listBlog}>
      {blogData.map((blog, index) => (
        <View key={index} style={styles.cardItem}>
          <ImageBackground
            style={styles.cardImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
            source={{ uri: blog.image }}>
            <View style={styles.cardContent}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{blog.title}</Text>
                <Text style={styles.cardText}>{blog.date}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  cardItem: {
    width: 280,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  cardTitle: {
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
  },
});

export default ListBlog;