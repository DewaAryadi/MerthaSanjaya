

// SORRY LU BEK KUANG NE SING NGERTI RGE DI HISTORY PAGE, RGE NGAE SENGERTINE RGE GEN, PAGE TAMPILAN HOME RGE UBAH 

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'


const Home = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 16, color: '#000' }}>Order history</Text>
            </View>

            <ScrollView>
                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579__340.jpg', }}
                        />
                        <Text style={styles.namamakanan}>
                            Ayam Panggang
                        </Text>
                    </View>
                    <View >
                    <Text style={styles.jumlahmakanan} >
                            1       X                                  Rp. 30.000 
                        </Text>
                    </View>
                </TouchableOpacity>

{/*  TOMBOL DELETE HISTORY */}

            </ScrollView>

        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    header: {
        width: '100%',
        height: 55,
        backgroundColor: 'orange',
        alignItems:'flex-start',
        paddingLeft: 20,
        marginTop:20,
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    postHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 30
        
    },
    namamakanan: {
        color: '#000',
        marginLeft: 10,
    },
    jumlahmakanan:{
        color: '#000',
        marginLeft: 60,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    postImg: {
        backgroundColor: '#DDD',
        width: '100%',
        height: 300
    },
    image: {
        height: 300
    },
    tomboldelete: {
        width: 125, 
        backgroundColor: '#00C2CB',   
        borderRadius: 40, 
        alignSelf:'flex-end', 
        marginTop: 20, 
        paddingBottom: 10
    },
})

