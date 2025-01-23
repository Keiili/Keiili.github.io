function openFolder(folderId) {
    document.getElementById(folderId).style.display = 'block';
}
  
function closeFolder(folderId) {
    document.getElementById(folderId).style.display = 'none';
}

function openFile(fileId) {
    document.getElementById(fileId).style.display = 'block';
}

function closeFile(fileId) {
    document.getElementById(fileId).style.display = 'none';
}

// 添加拖动功能的函数
function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            // 更新图标位置
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

// 获取所有图标并使其可拖动
const icons = document.querySelectorAll('.folder-window');
icons.forEach(icon => {
    makeDraggable(icon);
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
  }
  setInterval(updateTime, 1000);
  updateTime(); // 初始化时间
