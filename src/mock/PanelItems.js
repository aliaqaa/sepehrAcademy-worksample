import { RiDashboardHorizontalFill } from 'react-icons/ri';  
import { FaUserEdit, FaBook, FaBookmark, FaUserSecret } from 'react-icons/fa';  
import { MdComment } from 'react-icons/md';  

const iconMapping = {  
  Dashboard: RiDashboardHorizontalFill,  
  UserInfo: FaUserEdit,  
  MyCourses: FaBook,  
  ReservedCourses: FaBookmark,  
  MyComments: MdComment,  
  Favorites: FaBookmark,  
  SecuritySettings: FaUserSecret,  
};  

const PanelItems = [  
  { id: 1, title: "داشبورد", component: "Dashboard" },  
  { id: 2, title: "اطلاعات کاربری", component: "UserInfo" },  
  { id: 3, title: "دوره های من", component: "MyCourses" },  
  { id: 4, title: "دوره های رزرو شده", component: "ReservedCourses" },  
  { id: 5, title: "دیدگاه های من", component: "MyComments" },  
  { id: 6, title: "علاقه مندی ها", component: "Favorites" },  
  { id: 7, title: "تنظیمات امنیتی", component: "SecuritySettings" },  
];  

const PanelItemsWithIcons = PanelItems.map(item => ({  
  ...item,  
  icon: iconMapping[item.component],  
}));  

export default PanelItemsWithIcons;