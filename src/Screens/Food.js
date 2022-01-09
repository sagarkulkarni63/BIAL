import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 100
  },
  image: {
    width: 110,
    height: 110
  },
  rightContainer: { 
    padding: 0,
    width: "230%",
    backgroundColor: "#dbbe93"
  },
  title: {
    fontWeight: "bold",
    fontSize: 12
  },
  timing: {
    fontWeight: "bold",
    fontSize: 12
  },
  location: {
    fontWeight: "bold",
    fontSize: 12
  }
});

const Food = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <>
      <>
        <>
          <>
            <View style={styles.root}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    "https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/CCD.png"
                }}
              />
              <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>
                  Café Coffee Day, a part of Coffee Day Global Limited, is
                  India’s favourite hangout for coffee and conversation.
                </Text>
                <Text style={styles.timing}>Open 24 Hours</Text>
                <Text style={styles.location}>
                  The Quad by BLR, Opposite Arrivals
                </Text>
              </View>
            </View>
            <View style={styles.root}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    "https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/BWW-Logo.jpg"
                }}
              />
              <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>
                  Buffalo wild wings is a Lively sports-bar chain dishing up
                  wings & other American pub grub amid lots of large-screen
                  TVs.",
                </Text>
                <Text style={styles.timing}>11:00 - 23:00 hrs</Text>
                <Text style={styles.location}>
                  The Quad by BLR, Opposite Arrival
                </Text>
              </View>
            </View>
          </>
          <View style={styles.root}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/Gopizza-logo.jpg"
              }}
            />
            <View style={styles.rightContainer}>
              <Text style={styles.title} numberOfLines={3}>
                Don‘t Share, Have Your Own! Personal Sized Pizza from Korea
              </Text>
              <Text style={styles.timing}>Open 24 Hours</Text>
              <Text style={styles.location}>
                The QUAD by BLR, , Opposite Arrivals
              </Text>
            </View>
          </View>
        </>
        <View style={styles.root}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/KK.jpg"
            }}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={3}>
              Originated in the Turkish kitchen, brought to India; the kebab is
              one of the most versatile dish. Serving the Bangalore Epicurean
              crowd at The Quad by BLR.
            </Text>
            <Text style={styles.timing}>Open 24 Hours</Text>
            <Text style={styles.location}>
              The Quad by BLR, Opposite Arrivals
            </Text>
          </View>
        </View>
      </>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/ooru-canteen.png"
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Ooru Canteen- delightfully South Indian is a quick service concept
            featuring South Indian delicacies, taking its customers on a tour of
            South India in all its aspects from great design to its traditional
            food.
          </Text>
          <Text style={styles.timing}>Open 24 Hours</Text>
          <Text style={styles.location}>
            Kerb Side, Opposite Departure Gate # 5
          </Text>
        </View>
      </View>
    </>
      </ScrollView>
      </SafeAreaView>
  );
};

export default Food;
