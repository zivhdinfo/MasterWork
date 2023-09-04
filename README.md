# MasterWork
Cấu trúc
- MasterWork
  - index.html
  - assets | chứa các tài nguyên cần thiết
    - images | thư mục chứa ảnh của website
      - image1.jpg
      - image2.png
    - css    | thư mục chứa css của website
      - light.css  | các css chứa light.namecss ví dụ light.container  
      - dark.css   | các css chứa dark.namecss ví dụ dark.container 
    - js     | thư mục chứa script js của website
      - script.js
--------------------------------------------------------------------------------------------------
Các câu lệnh về github
- Khởi tạo và cài đặt kho lưu trữ Git
  - git init

- Sao chép kho lưu trữ từ xa về máy tính
  - git clone <url>

- Quản lý thay đổi và commit
  - Thêm tệp hoặc thư mục vào vùng sẵn sàng cho lần commit tiếp theo
    - git add <file>
  - Tạo một commit với tin nhắn mô tả thay đổi
    - git commit -m "Commit message"

- Đồng bộ hóa với kho lưu trữ từ xa
  - Đẩy các commit cục bộ lên kho lưu trữ từ xa trên GitHub
    - git push
  - Cập nhật phiên bản cục bộ và hợp nhất với phiên bản từ kho lưu trữ từ xa
    - git pull

- Quản lý nhánh (branch)
  - Liệt kê các nhánh hiện có trong kho lưu trữ
    - git branch
  - Chuyển đổi đến một nhánh khác
    - git checkout <branch>
  - Tạo và chuyển đổi đến một nhánh mới
    - git checkout -b <new-branch>
  - Hợp nhất một nhánh vào nhánh hiện tại
    - git merge <branch>
  - Xóa một nhánh cục bộ
    - git branch -d <branch>

- Quản lý kho từ xa (remote)
  - Thêm một kho lưu trữ từ xa vào danh sách các kho từ xa
    - git remote add <name> <url>
  - Tải về thông tin từ một kho từ xa mà không thực hiện hợp nhất
    - git fetch <remote>
  - Kéo phiên bản từ kho từ xa và hợp nhất vào nhánh cục bộ
    - git pull <remote> <branch>
  - Đẩy các commit lên kho từ xa
    - git push <remote> <branch>

- Các câu lệnh khác
  - Xem lịch sử commit
    - git log
  - Xem sự khác biệt giữa các phiên bản
    - git diff
  - Tạm thời lưu trữ thay đổi chưa commit
    - git stash
  - Xem danh sách các kho từ xa và URL của họ
    - git remote -v
