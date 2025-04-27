import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeft, Like1, Message, People} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from '@d11/react-native-fast-image';
import {fontType, colors} from '../../theme';
import {blogData} from '../../data'; // changed from komunitasData to blogData

const DetailKomunitas = ({route}) => {
  const {communityId} = route.params;
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  const selectedCommunity = blogData.find(c => c.id === communityId);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.grey(0.6)} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>

      {/* Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 100,
        }}>
        <FastImage
          style={styles.image}
          source={{uri: selectedCommunity.image}}
          resizeMode={FastImage.resizeMode.cover}
        />

        <Text style={styles.title}>{selectedCommunity.title}</Text>
        <Text style={styles.date}>{selectedCommunity.uploadDate}</Text>

        {/* Deskripsi */}
        <Text style={styles.description}>{selectedCommunity.description}</Text>

        <View style={styles.deskripsiBox}>
          <Text style={styles.label}>Tanggal Acara:</Text>
          <Text style={styles.value}>{selectedCommunity.eventDate}</Text>

          <Text style={styles.label}>Lokasi:</Text>
          <Text style={styles.value}>{selectedCommunity.location}</Text>

          <Text style={styles.label}>Kuota Peserta:</Text>
          <Text style={styles.value}>{selectedCommunity.quota} orang</Text>
        </View>

        {/* Button daftar */}
        <TouchableOpacity style={styles.buttonDaftar}>
          <Text style={styles.buttonText}>Daftar Sekarang</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Like1
            color={liked ? colors.blue() : colors.grey(0.6)}
            variant={liked ? 'Bold' : 'Linear'}
            size={24}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Message color={colors.grey(0.6)} variant="Linear" size={24} />
          <Text style={styles.info}>{selectedCommunity.totalComments}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <People color={colors.grey(0.6)} variant="Linear" size={24} />
          <Text style={styles.info}>{selectedCommunity.registered}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailKomunitas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
    paddingTop: 8,
  },
  image: {
    height: 200,
    borderRadius: 15,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    marginTop: 2,
  },
  description: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
    marginTop: 10,
    lineHeight: 18,
  },
  deskripsiBox: {
    marginTop: 20,
  },
  label: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
    color: colors.black(),
  },
  value: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
    color: colors.grey(),
    marginBottom: 10,
  },
  buttonDaftar: {
    backgroundColor: colors.darkGreen(),
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: colors.white(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 40,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
});
