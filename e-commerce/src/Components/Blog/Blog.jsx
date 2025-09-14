import React, { useState } from "react";
import post1 from "../../assets/images/post1.jpg";
import post2 from "../../assets/images/post2.jpg";
import post3 from "../../assets/images/post3.jpg";
import post4 from "../../assets/images/post4.jpg";
import post5 from "../../assets/images/post5.png";
import post6 from "../../assets/images/post6.png";
import Button from "@mui/material/Button";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import "./Blog.css";

const Blog = () => {
  const [visiblePost, setVisiblePost] = useState(4);
  const posts = [
    {
      id: 1,
      title: "Top 10 Must-Have Outfits for Summer 2025",
      excerpt:
        "Discover the essential summer wardrobe that will keep you stylish and comfortable in the heat.",
      author: "Manoj Katuwal",
      date: "June 15, 2025",
      // image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post1,
    },
    {
      id: 2,
      title: "Laptop Buying Guide: Best Laptops Under $1000",
      excerpt:
        "Find the perfect laptop that fits your budget without compromising on performance and style.",
      author: "Ketan Katuwal",
      date: "May 28, 2025",
      // image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      image: post2,
    },
    {
      id: 3,
      title: "Gift Ideas for Valentine's Day – 2025 Edition",
      excerpt:
        "Thoughtful and unique gift ideas that will impress your loved ones this Valentine's Day.",
      author: "Nawraj Bhandari",
      date: "Jan 22, 2025",
      // image: "https://images.unsplash.com/photo-1519415711931-702deacf5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Lifestyle",
      image: post3,
    },
    {
      id: 4,
      title: "How Our Products Are Made Sustainably",
      excerpt:
        "Learn about our commitment to sustainability and ethical manufacturing processes.",
      author: "Nischal Shrestha",
      date: "Apr 12, 2025",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      image: post4,
    },
    {
      id: 5,
      title: "5 Ways to Style Your Denim Jacket",
      excerpt:
        "Transform your classic denim jacket into versatile outfits for any occasion.",
      author: "Jiwan Karki",
      date: "Mar 5, 2025",
      // image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post5,
    },
    {
      id: 6,
      title: "2025 Home Decor Trends You Need to Know",
      excerpt:
        "Refresh your living space with the latest home decor trends of 2025.",
      author: "Sujal Rai",
      date: "Feb 18, 2025",
      // image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Home & Living",
      image: post6,
    },
    {
      id: 1,
      title: "Top 10 Must-Have Outfits for Summer 2025",
      excerpt:
        "Discover the essential summer wardrobe that will keep you stylish and comfortable in the heat.",
      author: "Manoj Katuwal",
      date: "June 15, 2025",
      // image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post1,
    },
    {
      id: 2,
      title: "Laptop Buying Guide: Best Laptops Under $1000",
      excerpt:
        "Find the perfect laptop that fits your budget without compromising on performance and style.",
      author: "Ketan Katuwal",
      date: "May 28, 2025",
      // image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      image: post2,
    },
    {
      id: 3,
      title: "Gift Ideas for Valentine's Day – 2025 Edition",
      excerpt:
        "Thoughtful and unique gift ideas that will impress your loved ones this Valentine's Day.",
      author: "Nawraj Bhandari",
      date: "Jan 22, 2025",
      // image: "https://images.unsplash.com/photo-1519415711931-702deacf5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Lifestyle",
      image: post3,
    },
    {
      id: 4,
      title: "How Our Products Are Made Sustainably",
      excerpt:
        "Learn about our commitment to sustainability and ethical manufacturing processes.",
      author: "Nischal Shrestha",
      date: "Apr 12, 2025",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      image: post4,
    },
    {
      id: 5,
      title: "5 Ways to Style Your Denim Jacket",
      excerpt:
        "Transform your classic denim jacket into versatile outfits for any occasion.",
      author: "Jiwan Karki",
      date: "Mar 5, 2025",
      // image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post5,
    },
    {
      id: 6,
      title: "2025 Home Decor Trends You Need to Know",
      excerpt:
        "Refresh your living space with the latest home decor trends of 2025.",
      author: "Sujal Rai",
      date: "Feb 18, 2025",
      // image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Home & Living",
      image: post6,
    },
    {
      id: 1,
      title: "Top 10 Must-Have Outfits for Summer 2025",
      excerpt:
        "Discover the essential summer wardrobe that will keep you stylish and comfortable in the heat.",
      author: "Manoj Katuwal",
      date: "June 15, 2025",
      // image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post1,
    },
    {
      id: 2,
      title: "Laptop Buying Guide: Best Laptops Under $1000",
      excerpt:
        "Find the perfect laptop that fits your budget without compromising on performance and style.",
      author: "Ketan Katuwal",
      date: "May 28, 2025",
      // image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      image: post2,
    },
    {
      id: 3,
      title: "Gift Ideas for Valentine's Day – 2025 Edition",
      excerpt:
        "Thoughtful and unique gift ideas that will impress your loved ones this Valentine's Day.",
      author: "Nawraj Bhandari",
      date: "Jan 22, 2025",
      // image: "https://images.unsplash.com/photo-1519415711931-702deacf5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Lifestyle",
      image: post3,
    },
    {
      id: 4,
      title: "How Our Products Are Made Sustainably",
      excerpt:
        "Learn about our commitment to sustainability and ethical manufacturing processes.",
      author: "Nischal Shrestha",
      date: "Apr 12, 2025",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      image: post4,
    },
    {
      id: 5,
      title: "5 Ways to Style Your Denim Jacket",
      excerpt:
        "Transform your classic denim jacket into versatile outfits for any occasion.",
      author: "Jiwan Karki",
      date: "Mar 5, 2025",
      // image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post5,
    },
    {
      id: 6,
      title: "2025 Home Decor Trends You Need to Know",
      excerpt:
        "Refresh your living space with the latest home decor trends of 2025.",
      author: "Sujal Rai",
      date: "Feb 18, 2025",
      // image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Home & Living",
      image: post6,
    },
    {
      id: 1,
      title: "Top 10 Must-Have Outfits for Summer 2025",
      excerpt:
        "Discover the essential summer wardrobe that will keep you stylish and comfortable in the heat.",
      author: "Manoj Katuwal",
      date: "June 15, 2025",
      // image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post1,
    },
    {
      id: 2,
      title: "Laptop Buying Guide: Best Laptops Under $1000",
      excerpt:
        "Find the perfect laptop that fits your budget without compromising on performance and style.",
      author: "Ketan Katuwal",
      date: "May 28, 2025",
      // image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      image: post2,
    },
    {
      id: 3,
      title: "Gift Ideas for Valentine's Day – 2025 Edition",
      excerpt:
        "Thoughtful and unique gift ideas that will impress your loved ones this Valentine's Day.",
      author: "Nawraj Bhandari",
      date: "Jan 22, 2025",
      // image: "https://images.unsplash.com/photo-1519415711931-702deacf5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Lifestyle",
      image: post3,
    },
    {
      id: 4,
      title: "How Our Products Are Made Sustainably",
      excerpt:
        "Learn about our commitment to sustainability and ethical manufacturing processes.",
      author: "Nischal Shrestha",
      date: "Apr 12, 2025",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      image: post4,
    },
    {
      id: 5,
      title: "5 Ways to Style Your Denim Jacket",
      excerpt:
        "Transform your classic denim jacket into versatile outfits for any occasion.",
      author: "Jiwan Karki",
      date: "Mar 5, 2025",
      // image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post5,
    },
    {
      id: 6,
      title: "2025 Home Decor Trends You Need to Know",
      excerpt:
        "Refresh your living space with the latest home decor trends of 2025.",
      author: "Sujal Rai",
      date: "Feb 18, 2025",
      // image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Home & Living",
      image: post6,
    },
    {
      id: 1,
      title: "Top 10 Must-Have Outfits for Summer 2025",
      excerpt:
        "Discover the essential summer wardrobe that will keep you stylish and comfortable in the heat.",
      author: "Manoj Katuwal",
      date: "June 15, 2025",
      // image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post1,
    },
    {
      id: 2,
      title: "Laptop Buying Guide: Best Laptops Under $1000",
      excerpt:
        "Find the perfect laptop that fits your budget without compromising on performance and style.",
      author: "Ketan Katuwal",
      date: "May 28, 2025",
      // image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Electronics",
      image: post2,
    },
    {
      id: 3,
      title: "Gift Ideas for Valentine's Day – 2025 Edition",
      excerpt:
        "Thoughtful and unique gift ideas that will impress your loved ones this Valentine's Day.",
      author: "Nawraj Bhandari",
      date: "Jan 22, 2025",
      // image: "https://images.unsplash.com/photo-1519415711931-702deacf5be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Lifestyle",
      image: post3,
    },
    {
      id: 4,
      title: "How Our Products Are Made Sustainably",
      excerpt:
        "Learn about our commitment to sustainability and ethical manufacturing processes.",
      author: "Nischal Shrestha",
      date: "Apr 12, 2025",
      // image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      image: post4,
    },
    {
      id: 5,
      title: "5 Ways to Style Your Denim Jacket",
      excerpt:
        "Transform your classic denim jacket into versatile outfits for any occasion.",
      author: "Jiwan Karki",
      date: "Mar 5, 2025",
      // image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Fashion",
      image: post5,
    },
    {
      id: 6,
      title: "2025 Home Decor Trends You Need to Know",
      excerpt:
        "Refresh your living space with the latest home decor trends of 2025.",
      author: "Sujal Rai",
      date: "Feb 18, 2025",
      // image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Home & Living",
      image: post6,
    },
  ];

  const seeMoreContent = () => {
    setVisiblePost((prev)=>prev + 3 )
  }

  return (
    <section className="blog-container">
      <h2 className="blog-header">Featured Articles</h2>
      <div className="posts">
        {posts.slice(0, visiblePost).map((p, i) => (
          <article className="article-solo" key={i}>
            <img className="article-img" src={p.image}></img>
            <div className="post-content">
              <h3 className="post-title">{p.title}</h3>
              <p className="post-excerpt">{p.excerpt}</p>
            </div>
            <div className="post-author">
              <span className="post-au">By {p.author}</span>
              <span className="post-date">{p.date}</span>
            </div>
            <Button className="post-see-more" variant="outlined">
              See More{" "}
            </Button>
          </article>
        ))}
      </div>

      {visiblePost < posts.length && (
        <div className="button-display">
          <Button variant="contained" onClick={seeMoreContent} disabled={visiblePost >= posts.length}>See more <IoArrowDownCircleOutline/></Button>
        </div>
      )}
    </section>
  );
};

export default Blog;
