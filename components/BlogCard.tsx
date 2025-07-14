import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export type BlogCardProps = {
  content: string;
  author: string;
  title: string;
  createdAt: string;
  id: string;
  imageUrl: string;
  tags: string[];
};

export const BlogCard = ({
  content,
  author,
  title,
  createdAt,
  id,
  imageUrl,
  tags,
}: BlogCardProps) => {
  return (
    <ThemedView id={id} style={styles.blogContainer}>
      <Image source={imageUrl} alt={`${title} image`} />
      <ThemedView style={styles.textContainer}>
        <ThemedView
          style={{ gap: 8, flexDirection: "row", backgroundColor: "#ffffff" }}
        >
          <ThemedText type="defaultSemiBold" style={{ color: "black" }}>
            {author}
          </ThemedText>
          <ThemedText style={{ color: "black" }}>{createdAt}</ThemedText>
        </ThemedView>
        <ThemedText style={{ color: "black" }}>{content}</ThemedText>
        <ThemedView
          style={{ flexDirection: "row", gap: 8, backgroundColor: "#ffffff" }}
        >
          {tags.map((tag, index) => (
            <ThemedText style={styles.tag} key={index}>
              {tag}
            </ThemedText>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    backgroundColor: "#ffffff",
    boxShadow: "8px 8px 16px black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    paddingVertical: 30,
    borderRadius: 4,
    gap: 8,
  },
  tag: {
    backgroundColor: "#061A40",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 18,
    fontSize: 13,
  },
});
