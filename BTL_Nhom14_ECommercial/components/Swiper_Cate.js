import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categorySelector, categoryState } from '../atoms/CategoryAtoms';
import Swiper from 'react-native-swiper';

export default function Swiper_Cate({ navigation, confirm }) {
  const [, setCategoryDetail] = useRecoilState(categoryState);
  const dataCate = useRecoilValue(categorySelector);

  const handlePress = (item) => {
    if (confirm) {
      navigation.replace("Product_ListView");
      setCategoryDetail(item);
    } else {
      setCategoryDetail(item);
    }
  };

  const groupCategoriesInSlides = (categories) => {
    const grouped = [];
    for (let i = 0; i < categories.length; i += 3) {
      grouped.push(categories.slice(i, i + 3));
    }
    return grouped;
  };

  const groupedCategories = groupCategoriesInSlides(dataCate);

  return (
    <View style={styles.listCate}>
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        loop={false}
        showsPagination={true}
        paginationStyle={styles.pagination}
        contentContainerStyle={styles.listCate}
      >
        {groupedCategories.map((group, index) => (
          <View key={index} style={styles.group}>
            {group.map((item) => (
              <Pressable
                key={item._id}
                style={styles.itemContainer}
                onPress={() => { handlePress(item); }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>{item.name}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  listCate: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  swiper: {
    height: 150,
  },
  pagination: {
    bottom: 20,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    alignItems: "center",
    width: 130,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#09D1C7",
  },
  itemText: {
    fontWeight: "bold",
  },
});
