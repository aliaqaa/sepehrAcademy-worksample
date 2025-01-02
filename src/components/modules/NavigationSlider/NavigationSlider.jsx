import React, { useEffect } from "react";  
import { Swiper, SwiperSlide } from "swiper/react";  
import "swiper/css";  
import "swiper/css/pagination";  
import { Autoplay, Pagination, Navigation } from "swiper/modules";  
import CourseCart from "../CourseCart/CourseCart";  
import useCourse from "../../../hooks/useCourse";  
import { ScaleLoader } from "react-spinners"; // Import the ScaleLoader  

function NavigationSlider() {  
  const { courses, loading, error, fetchTopCourses } = useCourse();  

  // Fetch top courses on component mount  
  useEffect(() => {  
    fetchTopCourses(7); // Adjust the count as needed  
  }, [fetchTopCourses]);  

  // Show loading state with spinner  
  if (loading) {  
    return (  
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>  
        <ScaleLoader color="#36D7B7" loading={loading} />  
      </div>  
    );  
  }  

  if (error) {  
    return <div>Error: {error}</div>;  
  }  

  return (  
    <Swiper  
      slidesPerView={1}  
      spaceBetween={20}  
      navigation={true}  
      breakpoints={{  
        400: {  
          slidesPerView: 1,  
        },  
        750: {  
          slidesPerView: 2,  
        },  
        1024: {  
          slidesPerView: 4,  
        },  
        1700: {  
          slidesPerView: 4,  
        },  
        3100: {  
          slidesPerView: 5,  
        },  
      }}  
      autoplay={{  
        delay: 3000,  
        disableOnInteraction: false,  
      }}  
      pagination={{  
        clickable: true,  
      }}  
      modules={[Autoplay, Navigation]}  
    >  
      {courses.map(course => (  
        <SwiperSlide key={course.courseId}>  
          <CourseCart course={course} /> {/* Pass single course object to CourseCart */}  
        </SwiperSlide>  
      ))}  
    </Swiper>  
  );  
}  

export default NavigationSlider;