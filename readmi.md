### Taildwind Css

---

**Kiến thức cơ bản**

- <b> Phần 1: `Kiến thức cơ bản`</b>
- <i>Giới thiệu Tailwind CSS </i>
- <i>So sánh với Bootstrap 5 </i>
- <i>Làm quen với `utility classes` - nền tảng cốt lõi của TailWind </i>
- <i>Sử dụng `utility classes` </i>
- <b> Phần 2: `Làm dự án thực tế`</b>

---

**Tailwind CSS là gì?**

- <i>`Framework CSS` dựa trên `utility-first` (class nhỏ cho từng tính năng)</i>
- Khác với `Bootstrap`, `Tailwind` không có sẵn các thành phần như: `button, card, navbar,...` mà chỉ cung cấp các `class nhỏ` - gọi là `utility class` để tự tạo ra giao diện theo ý muốn
- <b>Tailwind: `https://tailwindcss.com`</b>

---

**Tailwind vs Bootstrap**

- <b>Bootstrap: `Component-based framework`</b>
- <i>Các `class` Bootstrap thừơng gói gọn rất nhiều thuộc tính CSS bên trong một class duy nhất để:</i>
- <i>Giảm code CSS tay</i>
- <i>Tạo giao diện quen thuộc, nhanh gọn</i>
- <i>Ko cần hiểu rõ CSS</i>
- <b>Tailwind: `utility-first`</b>
- <i>Kết hợp từng class nhỏ</i>
- <i>Tự do, linh hoạt</i>

---

**Ưu điểm của Tailwind**

- <b>`Lắp ghép giao diện từ các khối nhỏ, linh hoạt`</b>
- <b>`Sưa class->giao diện thay đổi ngay`</b>
- <b>`Không cần viết đi viết lại CSS,chỉ dùng class có sẵn`</b>
- <b>`Tăng tốc độ UI`</b>
- <b>`Không cần nghĩ tên class - class chính là tính năng`</b>
- <b>`Tốt cho làm việc nhóm,dự án lớn - không lo xung đột class`</b>

---

**Nhược điểm của Tailwind**

- <b>`Khó học hơn bootstrap do có nhiều class nhỏ lẻ`</b>
- <b>`Code dài do phải thêm class vào html`</b>

---

**Extension**

- <b>Taildwind CSS IntelliSense</b>
- <b>PostCSS Language Support</b>
- <b>Live Preview</b>

---

**Ôn tập Emmet**

- <i>`https://docs.emmet.io/cheat-sheet/`</i>
- <i>`Sibling: +` -> anh em liền kề nhau(và)</i>
- <i>`Climb-up: ^` -> ra ngoài 1 cấp </i>
- <i>`Grouping: ()` -> gom nhóm </i>
- <i>`Child: >` -> con trực tiếp </i>
- <i>`Multiplication: *` -> tạo với số lượng chi định </i>
- <i>`Item numbering: $` -> tạo với số lượng chi định tăng dần (kết hợp với \*) </i>
- <i>`[attribute]` -> truyền thuộc tính</i>
- <i>`{content}` -> truyền nội dung </i>
- Exam: `ul>li*5{item $}`<br>
  ` <ul>`<br>
  `     <li>item 1</li>`<br>
  `     <li>item 2</li>`<br>
  `     <li>item 3</li>`<br>
  `     <li>item 4</li>`<br>
  `     <li>item 5</li>`<br>
  `</ul>`<br><br>
- Exam: `ul>li*5[title=title$]`<br>
  ` <ul>`<br>
  `     <li title="title1"></li>`<br>
  `     <li title="title2"></li>`<br>
  `     <li title="title3"></li>`<br>
  `     <li title="title4"></li>`<br>
  `     <li title="title5"></li>`<br>
  `  </ul>`<br>

---

### Cài đặt Tailwind CSS

- <b>Sư dụng link CDN</b>
- <b>Sử dụng Tailwind CLI </b>
- <i>B1: `Run: npm install tailwindcss @tailwindcss/cli`</i>
- <i>B2: `Tạo folder src chứa file "input.css"`</i>
- <i>B2: `Thêm @import "tailwindcss"; vào input.css`</i>
- <i>B4: `Run: npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch` sẻ tạo ra file `output.css`</i>
- <b>Sử dụng Vite</b>
- <b>Sử dụng Using PostCSS</b>

---

### `Container` trong Tailwind CSS

- <i>Dùng để giới hạn chiêu rộng tối đa của phần tử</i>
- <i>Có thể tùy chinh theo ý</i>
- <i></i>
- ![breakpoint](./Docs/Images/breakpoint.png)
