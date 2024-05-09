// Получение случайного изображения из Unsplash API
function getRandomPhoto() {
    const accessKey = '2pVtUTbxE0ZGUfF1A8W2yKUdStIy4FtVivphTe8l2C8';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const photoUrl = data.urls.regular;
            const photographerName = data.user.name;
            
            // Обновление изображения и информации о фотографе на странице
            document.getElementById('photo').src = photoUrl;
            document.getElementById('photographer').textContent = `Photographer: ${photographerName}`;
        })
        .catch(error => console.log('Error fetching data:', error));
}

// Обработчик нажатия кнопки "Like"
function likePhoto() {
    const likeCountElement = document.getElementById('like-count');
    let likeCount = parseInt(likeCountElement.textContent.split(':')[1].trim());
    likeCount++;
    likeCountElement.textContent = `Likes: ${likeCount}`;
}

// Загрузка случайного изображения при загрузке страницы
window.onload = function() {
    getRandomPhoto();
    
    // Назначение обработчика нажатия кнопки "Like"
    document.getElementById('like-button').addEventListener('click', likePhoto);
};
