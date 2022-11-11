import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Data = [
  {
    id: 0,
    uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135524/Avata/model5_xghqo2.png",
    name: "model 1",
    price: "100$",
  },
  {
    id: 1,
    uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135522/Avata/model1_ebxwoy.png",
    name: "model 2",
    price: "100$",
  },
  {
    id: 2,
    uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135522/Avata/model2_rygaxf.png",
    name: "model 3",
    price: "100$",
  },
  {
    id: 3,
    uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135522/Avata/model6_oeqvip.png",
    name: "model 4",
    price: "100$",
  },
  {
    id: 4,
    uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135522/Avata/model3_m8zgwm.png",
    name: "model 4",
    price: "100$",
  },
  {
    id: 5,
    uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135522/Avata/model4_bz95om.png",
    name: "model 4",
    price: "100$",
  },
];

const Item = ({ item }) => (
  <TouchableOpacity
    style={{
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image style={{ width: 100, height: 100 }} source={{ uri: item.uri }} />
    <Text style={{}}>{item.name}</Text>
    <Text style={{ fontWeight: "700" }}>{item.price}</Text>
  </TouchableOpacity>
);

export default function ScreenBai01() {
  const [selectButton, setSelectButton] = useState(0);

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.main}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.listButton}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSelectButton(0)}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1667061870/Avata/computer-science-1331579_1280_nomqbh.png",
                }}
              />
            </TouchableOpacity>
            {selectButton === 0 ? (
              <Text style={{ color: "#ec97ae" }}>All</Text>
            ) : (
              <Text>All</Text>
            )}
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSelectButton(1)}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1666966662/Avata/img_avatar_byssaa.png",
                }}
              />
            </TouchableOpacity>
            {selectButton === 1 ? (
              <Text style={{ color: "#ec97ae" }}>Men</Text>
            ) : (
              <Text>Men</Text>
            )}
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSelectButton(2)}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1666966662/Avata/avatar6_cfpsfq.png",
                }}
              />
            </TouchableOpacity>
            {selectButton === 2 ? (
              <Text style={{ color: "#ec97ae" }}>Women</Text>
            ) : (
              <Text>Women</Text>
            )}
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSelectButton(3)}
            >
              <Image
                style={styles.icon}
                source={{
                  uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1667672821/Avata/Icon_Boy_atpmf9.png",
                }}
              />
            </TouchableOpacity>
            {selectButton === 3 ? (
              <Text style={{ color: "#ec97ae" }}>Kit</Text>
            ) : (
              <Text>Kit</Text>
            )}
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              width: 100,
            }}
          >
            <TouchableOpacity>
              <Text style={{}}>T-Shirt</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{}}>Jeans</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{}}>Blouse</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{}}>Dress</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <FlatList data={Data} renderItem={renderItem} />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  listButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  button: {
    padding: 6,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
  },
  icon: {
    width: 36,
    height: 36,
  },

  footer: {},
});
