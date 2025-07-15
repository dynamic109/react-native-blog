export const blogs = [
  {
    id: "1",
    title: "Getting Started with React Native",
    author: "Jane Doe",
    content:
      "React Native is a popular framework for building native mobile apps using JavaScript and React. This article walks you through the basics...",
    imageUrl: require("@/assets/images/skincare-blog-post-ideas.jpg"),
    tags: ["React Native", "Mobile", "JavaScript"],
    createdAt: "2025-07-10",
  },
  {
    id: "2",
    title: "Expo vs. Bare React Native: Which Should You Choose?",
    author: "John Smith",
    content:
      "When starting a new mobile project, you might wonder whether to go with Expo or the bare React Native workflow. In this post, we compare the two...",
    imageUrl: require("@/assets/images/logo.png"),
    tags: ["Expo", "Comparison", "Tools"],
    createdAt: "2025-07-13",
  },
  {
    id: "3",
    title: "Styling in React Native: A Beginner’s Guide",
    author: "Alice Johnson",
    content:
      "Styling in React Native is done using JavaScript objects rather than traditional CSS. Learn how to use StyleSheet and flexbox layouts...",
    imageUrl: require("@/assets/images/react-logo.png"),
    tags: ["Styling", "Flexbox", "UI"],
    createdAt: "2025-07-13",
  },
];

export const inputsData = [
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
