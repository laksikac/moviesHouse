# moviesHouse
<h3>อธิบายโปรเจค</h3>
<p> -โปรเจคนี้จะทำ web application สำหรับเช่าภาพยนต์โดยจะใช้เครื่องมือพัฒนาดังนี้</br>
  Database: MongoDB</br>
  Backend: Node.js จะใช้ express, cors, compress, body-parser เข้ามาด้วย</br>
  Frontend: React Framework ตกแต่งด้วย bootstrap</br>
  
</p>
<p>เว็บไซต์จะมีการแสดงรายการภาพยนตร์ที่มีอยู่ในคลัง เพื่อสามารถนำเข้าตะกร้าเช่าภาพยนตร์ได้
</p>

<p><h5>Database</h5>
    ใช้ mongoose เป็น middleware ในการเชื่อมต่อกับ mongoDB โดยจะใช้ model Middleware เพื่อสร้าง schema หรือ โครงสร้างของข้อมูลที่ต้องการเก็บในฐานข้อมูล</br>
    มีการเก็บข้อมูลภาพยนตร์โดยมี data schema ดังนี้</br>
    { &nbs&nbsppid: Number,</br>
      &nbsp&nbsptitle: String,</br>
      &nbsp&nbspyear: String,</br>
      &nbsp&nbspimdbID: String,</br>
      &nbsp&nbspposter: String</br>
     }       
</p>
<p><h5>Backend</h5>
    ใช้ node.js มาช่วยจัดการในส่วนนี้และเรียกใช้ express middleware 
    เปิดด้วย http://localhost:3001
    โดยสามารถเรียก api ใช้ Http request ในการเรียกดูข้อมูล อัพเดตข้อมูล เพิ่มข้อมูล และ ลบข้อมูล 
    โดย method GET, POST, PUT, DELETE
    GET: http://localhost:3001/api/getData</br>
    POST: http://localhost:3001/api/putData</br>
    PUT: http://localhost:3001/api/updateData</br>
    DELETE: http://localhost:3001/api/deleteData</br>
    
</p>
<p><h5>Frontend</h5>
    ใช้ React-app framework และตกแต่งด้วย bootstrap </br>
    นำ axios มาช่วยในเรื่องการจัดการเกี่ยวกับการใช้ API</br>
    สามารถเข้าถึงหน้าเว็บไซต์ได้โดย http://localhost:3000</br>
    
</p>
  
<h3>สมาชิกในกลุ่ม</h3>
-6310110257 บุษบากร ยูถนันท์ sec01</br>
-6310110417 ลักษิกา ดำแดง sec02</br>
-6310110656 รุ่งรวี แซ่ชิน sec01</br>
