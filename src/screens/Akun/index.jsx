import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Edit } from 'iconsax-react-native';
import {blogData} from '../../data';
import {fontType, colors} from '../../theme';
import {ItemSmall} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Akun = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header Profile */}
      <View style={styles.profileHeader}>
        <Image
          source={{uri: 'https://i.pinimg.com/474x/de/bd/73/debd737073cdde2ab625c30527939948.jpg'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Fina Qurrotuna</Text>
        <Text style={styles.profileEmail}>finaaa@gmail.com</Text>
        
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Rekomendasi Kegiatan */}
      <TouchableOpacity style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Rekomendasi Kegiatan Komunitas</Text>
        <ScrollView contentContainerStyle={styles.blogList}>
          {blogData.map((blog, index) => (
            <View key={index} style={styles.blogItem}>
              <ImageBackground
                style={styles.blogImage}
                source={{uri: blog.image}}
                imageStyle={{borderRadius: 10}}>
                <View style={styles.blogContent}>
                  <Text style={styles.blogTitle}>{blog.title}</Text>
                  <Text style={styles.blogDate}>{blog.date}</Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen(),
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.darkGreen(),
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: colors.white(),
  },
  profileName: {
    fontSize: 20,
    fontFamily: fontType['Poppins-Bold'],
    color: colors.white(),
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: fontType['Poppins-Regular'],
    color: colors.white(0.8),
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: colors.lightGreen(),
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editButtonText: {
    color: colors.black(),
    fontFamily: fontType['Poppins-SemiBold'],
    fontSize: 14,
  },
  sectionContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fontType['Poppins-Bold'],
    color: colors.black(),
    marginBottom: 15,
    textAlign: 'center',
  },
  blogList: {
    gap: 15,
  },
  blogItem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  blogImage: {
    width: '100%',
    height: '100%',
  },
  blogContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  blogTitle: {
    fontSize: 14,
    color: colors.white(),
    fontFamily: fontType['Poppins-Bold'],
  },
  blogDate: {
    fontSize: 12,
    color: colors.white(0.8),
    fontFamily: fontType['Poppins-Regular'],
  },  
});

export default Akun;
