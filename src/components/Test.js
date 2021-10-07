import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [reviews, setReviews] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getReviews();
    getCourses();
    getTeacher();
    getCategories();
  }, [])

  const getReviews = () => {
    axios.get('https://api.onlinedu.uz/api/v1/reviews')
      .then(res => {
        setReviews(res.data)
      })
      .catch(err => { })
  }

  const getCourses = () => {
    axios.get('https://api.onlinedu.uz/api/v1/courses?per_page=6&category_type=paid&is_home=1')
      .then(res => {
        setCourses(res.data.data)
      })
      .catch(err => { })
  }

  const getTeacher = () => {
    axios.get('https://api.onlinedu.uz/api/v1/teachers?page=1&per_page=5')
      .then(res => {
        setTeachers(res.data.data)
      })
      .catch(err => { })
  }

  const getCategories = () => {
    axios.get('https://api.onlinedu.uz/api/v1/paid/categories')
      .then(res => {
        setCategories(res.data.data)
      })
      .catch(err => { })
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Name: {review.name}</p>
        </div>
      ))}

      <h1 style={{ textAlign: 'center' }}>Courses</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <p>Name: {course.name}</p>
        </div>
      ))}

      <h1 style={{ textAlign: 'center' }}>Teachers</h1>
      {teachers.map((teacher, index) => (
        <div key={index}>
          <p>Name: {teacher.name}</p>
        </div>
      ))}

      <h1 style={{ textAlign: 'center' }}>Categories</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <p>Name: {category.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Test
