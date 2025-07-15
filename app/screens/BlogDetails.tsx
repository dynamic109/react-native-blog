import { StyleSheet, ScrollView, Image, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRoute } from "@react-navigation/native";
import { blogs } from "@/data/data";

const BlogDetails = () => {
  const route = useRoute();
  const { id }: any = route.params;

  const data = blogs.filter((blog) => blog.id === id);
  const blog = data[0];

  if (!blog) {
    return (
      <View style={styles.fullScreen}>
        <ThemedView style={styles.centered}>
          <ThemedText style={styles.notFound}>Blog not found</ThemedText>
        </ThemedView>
      </View>
    );
  }

  return (
    <View style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={blog.imageUrl} style={styles.image} />

        <ThemedView style={styles.metaContainer}>
          <ThemedText type="title" style={styles.title}>
            {blog.title}
          </ThemedText>
          <ThemedText style={styles.meta}>
            By <ThemedText style={styles.author}>{blog.author}</ThemedText> •{" "}
            {blog.createdAt}
          </ThemedText>
        </ThemedView>

        <ThemedText style={styles.content}>{blog.content}</ThemedText>

        <ThemedView style={styles.tagsContainer}>
          {blog.tags.map((tag, index) => (
            <ThemedText style={styles.tag} key={index}>
              {tag}
            </ThemedText>
          ))}
        </ThemedView>
      </ScrollView>
    </View>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },
  metaContainer: {
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#061A40",
  },
  meta: {
    color: "#6e6e6e",
    fontSize: 14,
  },
  author: {
    fontWeight: "600",
    color: "#333",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 24,
  },
  tagsContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#061A40",
    color: "#ffffff",
    fontSize: 13,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  notFound: {
    fontSize: 18,
    color: "red",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
