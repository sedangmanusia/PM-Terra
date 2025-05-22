import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert, Modal, Image } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { fontType, colors } from '../../theme';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

const EditKomunitasForm = ({ route }) => {
    // ambil parameter blogId
    const { KomunitasId } = route.params;

    const dataCategory = [
        { id: 1, name: 'Food' },
        { id: 2, name: 'Sports' },
        { id: 3, name: 'Technology' },
        { id: 4, name: 'Fashion' },
        { id: 5, name: 'Health' },
        { id: 6, name: 'Lifestyle' },
        { id: 7, name: 'Music' },
        { id: 8, name: 'Car' },
    ];

    const [blogData, setBlogData] = useState({
        title: '',
        description: '',
        uploadDate: '',
        eventDate: '',
        location: '',
        quota: '',
        registered: 0,
        category: {},
        totalLikes: 0,
        totalComments: 0,
        content: '',
    });

    const handleChange = (key, value) => {
        setBlogData({
            ...blogData,
            [key]: value,
        });
    };

    const [image, setImage] = useState(null);
    const navigation = useNavigation();

    // state status apakah sedang loading/tidak
    const [loading, setLoading] = useState(true);

    // fungsi untuk mengambil data blog berdasarkan id
    const getBlogById = async () => {
        setLoading(true);
        try {
            // ambil data blog berdasarkan ID dengan metode GET 
            const response = await axios.get(
                `https://682405e465ba058033989a69.mockapi.io/api/detail_komunitas/${KomunitasId}`,
            );
            // atur state blog data menjadi data blog yang di dapatkan 
            // dari response API
            setBlogData({
                title: response.data.title,
                description: response.data.description,
                uploadDate: response.data.uploadDate,
                eventDate: response.data.eventDate,
                location: response.data.location,
                quota: response.data.quota,
                registered: response.data.registered,
                category: {
                    id: response.data.category.id,
                    name: response.data.category.name
                },
                totalLikes: response.data.totalLikes,
                totalComments: response.data.totalComments,
                content: response.data.content || '',
            });
            // atur data gambar
            setImage(response.data.image);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogById();
    }, [blogId]);

    const handleUpdate = async () => {
        setLoading(true);
        try {
            // update spesifik data blog (ID) menggunakan metode PUT
            const response = await axios
                .put(`https://682405e465ba058033989a69.mockapi.io/api/detail_komunitas/${KomunitasId}`, {
                    title: blogData.title,
                    description: blogData.description,
                    uploadDate: blogData.uploadDate,
                    eventDate: blogData.eventDate,
                    location: blogData.location,
                    quota: Number(blogData.quota),
                    registered: Number(blogData.registered),
                    category: blogData.category,
                    image,
                    content: blogData.content,
                    totalComments: blogData.totalComments,
                    totalLikes: blogData.totalLikes,
                });
            if (response.status == 200) {
                navigation.goBack();
            }
        } catch (e) {
            Alert.alert('error', `${e.message}`);
        } finally {
            setLoading(false);
        }
    };

    const selectImage = () => {
        console.log('selectImage called');
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 1,
            },
            (response) => {
                console.log('launchImageLibrary response:', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    Alert.alert('Error', response.errorMessage);
                } else {
                    const uri = response.assets && response.assets[0].uri;
                    setImage(uri);
                }
            }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={colors.black()} variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.title}>Edit Komunitas</Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingVertical: 10,
                    gap: 10,
                }}>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Title"
                        value={blogData.title}
                        onChangeText={text => handleChange('title', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        multiline
                        style={textInput.title}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Description"
                        value={blogData.description}
                        onChangeText={text => handleChange('description', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        multiline
                        style={textInput.content}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Upload Date (YYYY-MM-DD)"
                        value={blogData.uploadDate}
                        onChangeText={text => handleChange('uploadDate', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        style={textInput.content}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Event Date (YYYY-MM-DD)"
                        value={blogData.eventDate}
                        onChangeText={text => handleChange('eventDate', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        style={textInput.content}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Location"
                        value={blogData.location}
                        onChangeText={text => handleChange('location', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        style={textInput.content}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Quota"
                        value={String(blogData.quota)}
                        onChangeText={text => handleChange('quota', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        keyboardType="numeric"
                        style={textInput.content}
                    />
                </View>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Registered"
                        value={String(blogData.registered)}
                        onChangeText={text => handleChange('registered', text)}
                        placeholderTextColor={colors.grey(0.6)}
                        keyboardType="numeric"
                        style={textInput.content}
                    />
                </View>
                <View style={[textInput.borderDashed, { alignItems: 'center' }]}>
                    {image ? (
                        <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
                    ) : (
                        <Text style={{ color: colors.grey(0.6), marginBottom: 10 }}>No image selected</Text>
                    )}
                    <TouchableOpacity
                        style={[styles.button, { paddingHorizontal: 30 }]}
                        onPress={selectImage}
                    >
                        <Text style={styles.buttonLabel}>Upload Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={[textInput.borderDashed]}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontFamily: fontType['Pjs-Regular'],
                            color: colors.grey(0.6),
                        }}>
                        Category
                    </Text>
                    <View style={category.container}>
                        {dataCategory.map((item, index) => {
                            const bgColor =
                                item.id === blogData.category.id
                                    ? colors.black()
                                    : colors.grey(0.08);
                            const color =
                                item.id === blogData.category.id
                                    ? colors.white()
                                    : colors.grey();
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() =>
                                        handleChange('category', { id: item.id, name: item.name })
                                    }
                                    style={[category.item, { backgroundColor: bgColor }]}>
                                    <Text style={[category.name, { color: color }]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonLabel}>Update</Text>
                </TouchableOpacity>
            </View>

            {/* Menampilkan status loading */}
            <Modal visible={loading} animationType='none' transparent>
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color={colors.blue()} />
                </View>
            </Modal>
        </View>
    );
};

export default EditKomunitasForm;

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
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.blue(),
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

const textInput = StyleSheet.create({
    borderDashed: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: colors.grey(0.4),
    },
    title: {
        fontSize: 16,
        fontFamily: fontType['Pjs-SemiBold'],
        color: colors.black(),
        padding: 0,
    },
    content: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.black(),
        padding: 0,
    },
});

const category = StyleSheet.create({
    title: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Regular'],
        color: colors.grey(0.6),
    },
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 25,
    },
    name: {
        fontSize: 10,
        fontFamily: fontType['Pjs-Medium'],
    },
});
