import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Modal, Image, Alert} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import {ArrowLeft, AddSquare, Add} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import ImagePicker from 'react-native-image-crop-picker';
import { addDoc, collection, getFirestore } from '@react-native-firebase/firestore';

// Sample dataCategory array for category options
const dataCategory = [
  { id: '1', name: 'Education' },
  { id: '2', name: 'Health' },
  { id: '3', name: 'Environment' },
  { id: '4', name: 'Technology' },
];

const AddKomunitasForm = () => {
  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    uploadDate: '',
    eventDate: '',
    location: '',
    quota: '',
  });

  const [image, setImage] = useState(null);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          Alert.alert('Error', response.errorMessage);
        } else {
          const uri = response.assets && response.assets[0].uri;
          setImage(uri);
        }
      },
    );
  };

  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setLoading(true);
    try {
      const imageFormData = new FormData();
      imageFormData.append('file', {
        uri: image,
        type: `image/${extension}`, // or 'image/png'
        name: filename,
      });

      const result = await fetch('https://backend-file-praktikum.vercel.app/upload/', {
        method: 'POST',
        body: imageFormData,
      });
      if (result.status !== 200) {
        throw new Error("failed to upload image");
      }

      const { url } = await result.json();

      const db = getFirestore();
      const komunitasRef = collection(db, 'komunitas');
      await addDoc(komunitasRef, {
        title: formData.title,
        description: formData.description,
        uploadDate: formData.uploadDate,
        eventDate: formData.eventDate,
        location: formData.location,
        quota: Number(formData.quota),
        image: url,
        createdAt: new Date(),
      });

      setLoading(false);
      console.log('Kegiatan Komunitas Ditambahkan!');
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>Tambah Kegiatan</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={input.borderDashed}>
          <TextInput
            placeholder="Judul"
            value={formData.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={input.text}
          />
        </View>
        <View style={[input.borderDashed, {minHeight: 150}]}>
          <TextInput
            placeholder="Deskripsi"
            value={formData.description}
            onChangeText={text => handleChange('description', text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={input.text}
          />
        </View>
        <View style={input.borderDashed}>
          <TextInput
            placeholder="Tanggal Dibuat (YYYY-MM-DD)"
            value={formData.uploadDate}
            onChangeText={text => handleChange('uploadDate', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>
        <View style={input.borderDashed}>
          <TextInput
            placeholder="Tanggal Pelaksanaan (YYYY-MM-DD)"
            value={formData.eventDate}
            onChangeText={text => handleChange('eventDate', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>
        <View style={input.borderDashed}>
          <TextInput
            placeholder="Lokasi"
            value={formData.location}
            onChangeText={text => handleChange('location', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={input.text}
          />
        </View>
        <View style={input.borderDashed}>
          <TextInput
            placeholder="Kuota"
            value={formData.quota}
            onChangeText={text => handleChange('quota', text)}
            placeholderTextColor={colors.grey(0.6)}
            keyboardType="numeric"
            style={input.text}
          />
        </View>
        {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: colors.blue(),
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                input.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </View>
  );
};

export default AddKomunitasForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.darkGreen(),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  loadingOverlay: {
    flex: 1,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const input = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});

const category = StyleSheet.create({
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    marginBottom: 10,
    color: colors.black(),
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  name: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 12,
  },
});
