import React, { useState } from 'react';
import {Animated, View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Edit } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { blogData } from '../../data';
import { useNavigation } from '@react-navigation/native';

const ItemKomunitas = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);

  const opacityY = diffClampY.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0.4],
    extrapolate: 'clamp',
  });

  const translateY = diffClampY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -20], // header akan naik 20px saat scroll
    extrapolate: 'clamp',
  });
  
  

  const filteredData = blogData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.wrapper}>
      {/* Animated Header */}
      <Animated.View style={[styles.header, { opacity: opacityY, transform: [{ translateY }] }]}>
        <Text style={styles.headerTitle}>Kegiatan Komunitas</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Cari kegiatan..."
          placeholderTextColor={colors.black(0.6)}
          value={searchQuery}
          onChangeText={setSearchQuery}
          />
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollArea}
        contentContainerStyle={styles.listBlog}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {filteredData.map((blog, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardItem}
            onPress={() =>
              navigation.navigate('DetailKomunitas', { communityId: blog.id })
            }
          >
            <ImageBackground
              style={styles.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: blog.image }}
            >
              <View style={styles.cardContent}>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{blog.title}</Text>
                  <Text style={styles.cardText}>{blog.date}</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddKomunitasForm')}
      >
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightGreen(),
  },
  scrollArea: {
    paddingTop: 142, // agar konten tidak tertutup header
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 10,
    backgroundColor: colors.lightGreen(),
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fontType['Poppins-Bold'],
    color: colors.black(),
    marginBottom: 15,
  },
  searchBar: {
    backgroundColor: colors.darkGreen(),
    borderRadius: 10,
    padding: 10,
    color: colors.lightGreen(),
    fontFamily: fontType['Poppins-Regular'],
  },
  listBlog: {
    paddingBottom: 20,
    paddingHorizontal: 15,
    gap: 20,
  },
  cardItem: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 15,
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  cardInfo: {
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 14,
    color: colors.white(),
    fontFamily: fontType['Poppins-Bold'],
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    marginTop: 5,
    fontFamily: fontType['Poppins-Regular'],
  },
  floatingButton: {
    backgroundColor: colors.darkGreen(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.lightGreen(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default ItemKomunitas;
