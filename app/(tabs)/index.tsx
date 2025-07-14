import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import blogs from "@/data/data";
import { BlogCard } from "@/components/BlogCard";

export default function HomeScreen() {
  const date = new Date();
  const hour = date.getHours();
  let greetings = "";

  if (hour < 12) {
    greetings = "Good Morning";
  } else if (hour < 17) {
    greetings = "Good Afternoon";
  } else {
    greetings = "Good Evening";
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1A1D29" }}
      headerImage={
        <>
          <Image
            source={require("@/assets/images/undraw_blog-post_f68f.svg")}
            style={styles.logo}
          />
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Share your story</ThemedText>
            <ThemedText
              type="subtitle"
              style={{
                textAlign: "center",
                lineHeight: 30,
              }}
            >
              Create, edit and share your thoughts with the world through
              beautiful blog posts
            </ThemedText>
          </ThemedView>
        </>
      }
    >
      <ThemedView
        style={{
          gap: 8,
        }}
      >
        <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedText type="defaultSemiBold">{greetings}</ThemedText>
          <HelloWave />
        </ThemedView>
        <>
          <ThemedText type="subtitle">Read recent blog posts</ThemedText>
        </>
      </ThemedView>
      <ThemedView style={{ gap: 24 }}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "transparent",
    textAlign: "center",
    zIndex: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 250,
    width: "0%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
