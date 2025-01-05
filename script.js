const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function loadPosts() {
    const postsRef = database.ref('posts');
    postsRef.on('value', (snapshot) => {
        const posts = snapshot.val();
        const postsDiv = document.getElementById('posts');
        postsDiv.innerHTML = '';
        Object.keys(posts).forEach(key => {
            const post = posts[key];
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p>${post.content}</p>
                <button onclick="deletePost('${key}')">删除</button>
                <button onclick="editPost('${key}')">编辑</button>
            `;
            postsDiv.appendChild(postElement);
        });
    });
}

function addPost(content) {
    const newPostRef = database.ref('posts').push();
    newPostRef.set({
        content: content
    });
}

function deletePost(postId) {
    const postRef = database.ref(`posts/${postId}`);
    postRef.remove();
}

function editPost(postId) {
    const content = prompt('请输入新的帖子内容：', '');
    if (content) {
        const postRef = database.ref(`posts/${postId}`);
        postRef.update({
            content: content
        });
    }
}

document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() !== '') {
        addPost(postContent);
        document.getElementById('post-content').value = '';
    } else {
        alert('请输入帖子内容！');
    }
});

window.onload = loadPosts;
