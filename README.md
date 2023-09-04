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

Các câu lệnh github cơ bản:

git init: Khởi tạo một kho lưu trữ Git mới.
git clone <url>: Sao chép một kho lưu trữ từ GitHub về máy tính.
git add <file>: Thêm tệp hoặc thư mục vào vùng sẵn sàng cho lần commit tiếp theo.
git commit -m "Commit message": Tạo một commit với tin nhắn mô tả thay đổi.
git push: Đẩy các commit cục bộ lên kho lưu trữ từ xa trên GitHub.
git pull: Cập nhật phiên bản cục bộ và hợp nhất với phiên bản từ kho lưu trữ từ xa.
git status: Xem trạng thái của vùng làm việc và các tệp đã sửa đổi.
Các câu lệnh nhánh (branch):
8. git branch: Liệt kê các nhánh hiện có trong kho lưu trữ.

git checkout <branch>: Chuyển đổi đến một nhánh khác.
git checkout -b <new-branch>: Tạo và chuyển đổi đến một nhánh mới.
git merge <branch>: Hợp nhất một nhánh vào nhánh hiện tại.
git branch -d <branch>: Xóa một nhánh cục bộ.
Các câu lệnh làm việc với từ xa (remote):
13. git remote add <name> <url>: Thêm một kho lưu trữ từ xa vào danh sách các kho từ xa.

git fetch <remote>: Tải về thông tin từ một kho từ xa mà không thực hiện hợp nhất.
git pull <remote> <branch>: Kéo phiên bản từ kho từ xa và hợp nhất vào nhánh cục bộ.
git push <remote> <branch>: Đẩy các commit lên kho từ xa.
Các câu lệnh khác:
17. git log: Xem lịch sử commit.

git diff: Xem sự khác biệt giữa các phiên bản.
git stash: Tạm thời lưu trữ thay đổi chưa commit.
git remote -v: Xem danh sách các kho từ xa và URL của họ.
