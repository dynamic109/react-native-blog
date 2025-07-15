import { Button, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";

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
  const router = useRouter();
  return (
    <ThemedView id={id} style={styles.blogContainer}>
      <Image
        source={imageUrl}
        onError={(e) => console.log("Image failed to load:", e)}
        accessibilityLabel={`${title} image`}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          backgroundColor: "#ccc", // helpful as fallback
        }}
      />
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
        <ThemedView>
          <Button
            onPress={() =>
              router.push({ pathname: "/screens/BlogDetails", params: { id } })
            }
            title="Read More"
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
