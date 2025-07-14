import { Button, ScrollView, StyleSheet, TextInput, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Animated from "react-native-reanimated";

type BlogDataProps = {
  author: string;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  // date: Date;
};

export default function TabTwoScreen() {
  const [blogData, setBlogData] = useState<BlogDataProps>({
    author: "",
    title: "",
    content: "",
    tags: [],
    imageUrl: "",
  });
  const inputsData = [
    {
      label: "Title",
      placeholder: "Enter blog title",
    },
    {
      label: "Author",
      placeholder: "Enter author name",
    },
    {
      label: "Content",
      placeholder: "Write your blog contents here...",
    },
    {
      label: "Tags",
      placeholder: "e.g. React Native, Mobile, JavaScript",
    },
  ];

  const pickImage = async () => {
    // Ask for permission
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setBlogData({
        ...blogData,
        imageUrl: result.assets[0].uri, // Save the image URI
      });
    }
  };

  const handleChange = (e: any, input: any) => {
    const value = e.nativeEvent.text;
    if (input.label.toLowerCase() === "tags") {
      setBlogData({
        ...blogData,
        tags: value.split(",").map((tag: any) => tag.trim()),
      });
    } else {
      setBlogData({
        ...blogData,
        [input.label.toLowerCase()]: value,
      });
    }
  };

  const handleSubmit = () => {
    console.log("Blog Data Submitted:", blogData);
  };

  return (
    <Animated.ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create New Blog</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputsContainer}>
        {inputsData.map((input, index) => (
          <ThemedView
            style={{ backgroundColor: "transparent", gap: 2 }}
            key={index}
          >
            <ThemedText style={styles.label}>{input.label}</ThemedText>
            <TextInput
              value={
                input.label.toLowerCase() === "title"
                  ? blogData.title
                  : input.label.toLowerCase() === "author"
                  ? blogData.author
                  : input.label.toLowerCase() === "content"
                  ? blogData.content
                  : input.label.toLowerCase() === "tags"
                  ? blogData.tags.join(", ")
                  : ""
              }
              onChange={(e) => handleChange(e, input)}
              style={[
                styles.input,
                input.label === "Content" && { height: 120 },
              ]}
              placeholder={input.placeholder}
            />
          </ThemedView>
        ))}
        <ThemedView style={{ marginBottom: 20 }}>
          <Button title="Choose Image" onPress={pickImage} />
          {blogData.imageUrl && (
            <Image
              source={{ uri: blogData.imageUrl }}
              style={styles.imagePreview}
              resizeMode="cover"
            />
          )}
        </ThemedView>
        <Button onPress={handleSubmit} title="Create Blog Post" />
      </ThemedView>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "transparent",
  },
  inputsContainer: {
    marginTop: 100,
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: "transparent",
    gap: 24,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
