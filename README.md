# moviesHouse
<h3>อธิบายโปรเจค</h3>
<p> โปรเจคนี้จะทำ web application สำหรับเช่าภาพยนต์โดยจะใช้เครื่องมือพัฒนาดังนี้</br>
  Database: MongoDB</br>
  Backend: Node.js จะใช้ express, cors, compress, body-parser เข้ามาด้วย</br>
  Frontend: React Framework ตกแต่งด้วย bootstrap</br>
  
</p>
<p>เว็บไซต์จะมีการแสดงรายการภาพยนตร์ที่มีอยู่ในคลัง เพื่อสามารถนำเข้าตะกร้าเช่าภาพยนตร์ได้</br>
   และมีปุ่มให้สามารถค้านหารายชื่อภาพยนต์ที่ต้องการจะเช่าได้
</p>

<p><h5>Database</h5>
    ใช้ mongoose เป็น middleware ในการเชื่อมต่อกับ mongoDB โดยจะใช้ model Middleware เพื่อสร้าง schema หรือ โครงสร้างของข้อมูลที่ต้องการเก็บในฐานข้อมูล</br>
    มีการเก็บข้อมูลภาพยนตร์โดยมี data schema ดังนี้</br>
    { &nbsp&nbspid: Number,</br>
      &nbsp&nbsptitle: String,</br>
      &nbsp&nbspyear: String,</br>
      &nbsp&nbspimdbID: String,</br>
      &nbsp&nbspposter: String</br>
     } </br>
     โดยข้อมูลภาพยนตร์นำมาจาก  http://www.omdbapi.com
</p>
<p><h5>Backend</h5>
    ใช้ node.js มาช่วยจัดการในส่วนนี้และเรียกใช้ express middleware 
    เปิดด้วย http://localhost:3001
    โดยสามารถเรียก api ใช้ Http request ในการเรียกดูข้อมูล อัพเดตข้อมูล เพิ่มข้อมูล และ ลบข้อมูล 
    โดย method GET, POST, PUT, DELETE</br>
    GET: http://localhost:3001/api/getData</br>
    POST: http://localhost:3001/api/putData</br>
    PUT: http://localhost:3001/api/updateData</br>
    DELETE: http://localhost:3001/api/deleteData/:id</br>
    
</p>
<p><h5>Frontend</h5>
    ใช้ React-app framework และตกแต่งด้วย bootstrap </br>
    นำ axios มาช่วยในเรื่องการจัดการเกี่ยวกับการใช้ API</br>
    สามารถเข้าถึงหน้าเว็บไซต์ได้โดย http://localhost:3000</br>
    ภายในแอปจะมีทั้งหมมด 5 components และมีหน้าที่ ดังนี้</br>
    1).MovieList เพื่อแสดงรายการภาพยนตร์ที่มีอยู่</br>
    2).MovieListHeading เพื่อส่ง heading ไปแสดงข้อความของแต่ละ part ว่าทำหน้าที่อะไรเช่น Movies แสดงรายการภาพยนตร์เป็นรูป poster , My Cart แสดงรายการภาพยนตร์ที่ได้เลือกไว้</br>
    3).SearchBox.js เพื่อไว้ใช้เลือกชื่อรายการภาพยนตร์ที่สนใจ</br>
    4).AddToCart.js จะแสดงปุ่มกดเพื่อเลือกภาพยนตร์ที่จะเช่า</br>
    5).RemoveFavorites.js จะแสดงปุ่มกดเพื่อลบภาพยนตร์ที่จะเช่าออก</br>
    
</p>
<h3>รายการหน้าเว็บไซต์</h3>
<img src="/frontend/assets/movies1.png" alt="main page" title=""></br>
<img src="/frontend/assets/movies2.png" alt="add a movie to your cart" title=""></br>
<img src="/frontend/assets/movies3.png" alt="My cart" title="">

  
<h3>สมาชิกในกลุ่ม</h3>
-6310110257 บุษบากร ยูถนันท์ sec01</br>

-6310110417 ลักษิกา ดำแดง sec02</br>
-6310110656 รุ่งรวี แซ่ชิน sec01</br>
