import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import HeroSection from "../components/HeroSection";

const categories = [
  { title: "Fresh Fruits", image: "/images/fruits.jpg" },
  { title: "Vegetables", image: "/images/vegetables.jpg" },
  { title: "Dairy Products", image: "/images/dairy.jpg" },
  { title: "Bakery", image: "/images/bakery.jpg" },
];

const products = [
  { name: "Organic Apples", price: "$3.99 / lb", image: "/images/apples.jpg" },
  { name: "Whole Milk", price: "$2.49", image: "/images/milk.jpg" },
  { name: "Brown Bread", price: "$1.99", image: "/images/bread.jpg" },
  { name: "Carrots", price: "$0.99 / lb", image: "/images/carrots.jpg" },
];

function Home() {
  return (
    <>
      <HeroSection />

      {/* Categories Section */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Shop by Category
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={6} sm={3} key={category.title}>
              <Card
                sx={{ borderRadius: 2, overflow: "hidden", cursor: "pointer" }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {category.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popular Products */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          px: { xs: 2, md: 6 },
          py: 6,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Popular Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.name}>
              <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="subtitle1">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Delivery Info */}
      <Box
        sx={{
          backgroundColor: "background.default",
          px: { xs: 2, md: 6 },
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Fast & Fresh Delivery
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Get your groceries delivered to your doorstep within 2 hours.
          Freshness guaranteed.
        </Typography>
        <Button variant="contained" size="large" color="primary">
          Start Shopping
        </Button>
      </Box>
    </>
  );
}

export default Home;
