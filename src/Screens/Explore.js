import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNavigation from "../Navigation/TopNavigation";
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 100,
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

const Explore = () => {
  return (
      <SafeAreaView>
      <ScrollView>
    <><><><><View style={styles.root}>
      <Image style={styles.image} source={{ uri: 'https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/ITC.jpg' }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>Representing India's Art and Artifacts from regions with rich heritage.</Text>
        <Text style={styles.timing}>Open 24 Hours</Text>
        <Text style={styles.location}>Domestic Departure</Text>
      </View>
    </View><View style={styles.root}>
        <Image style={styles.image} source={{ uri: 'https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/Arcelia.png' }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>This fragrance journey lets you dive deeper than the surface of its aroma to create your own story by shoppers stop.",</Text>
          <Text style={styles.timing}>Open 24 Hours</Text>
          <Text style={styles.location}>Domestic Departure</Text>
        </View>
      </View></><View style={styles.root}>
        <Image style={styles.image} source={{ uri: 'https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/Cococart%20Logo%2001.jpg' }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>An immense collectiono of imported chocolates for every type of person out there, cococart is the gatekeeper to a world of delicious,decadent chocolates.</Text>
          <Text style={styles.timing}>Open 24 Hours</Text>
          <Text style={styles.location}>Domestic Departure</Text>
        </View>
      </View></><View style={styles.root}>
        <Image style={styles.image} source={{ uri: 'https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/forest-essentials.png' }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products.</Text>
          <Text style={styles.timing}>Open 24 Hours</Text>
          <Text style={styles.location}>Domestic Departure</Text>
        </View>
      </View></><View style={styles.root}>
        <Image style={styles.image} source={{ uri: 'https://www.bengaluruairport.com/content/dam/bial/global/logo/retail-food/Hidesign.png' }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>Hidesign stands out for the sensuous naturalness of high quality leathers and smooth soft glow of solid brass fittings in leather goods it handcrafts.</Text>
          <Text style={styles.timing}>Open 24 Hours</Text>
          <Text style={styles.location}>Domestic Departure</Text>
        </View>
      </View></>
      </ScrollView>
      </SafeAreaView>
  );
}

export default Explore;