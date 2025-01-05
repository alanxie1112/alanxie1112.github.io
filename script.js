function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button onclick="deletePost(${index})">删除</button>
            <button onclick="editPost(${index})">编辑</button>
        `;
        postsDiv.appendChild(postElement);
    });
}

function addPost(content) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push({ content: content });
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();
    }
}

function editPost(index) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    if (index >= 0 && index < posts.length) {
        const newContent = prompt('请输入新的帖子内容：', posts[index].content);
        if (newContent) {
            posts[index].content = newContent;
            localStorage.setItem('posts', JSON.stringify(posts));
            loadPosts();
        }
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

window.onload = loadPosts;function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button onclick="deletePost(${index})">删除</button>
            <button onclick="editPost(${index})">编辑</button>
        `;
        postsDiv.appendChild(postElement);
    });
}

function addPost(content) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push({ content: content });
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();
    }
}

function editPost(index) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    if (index >= 0 && index < posts.length) {
        const newContent = prompt('请输入新的帖子内容：', posts[index].content);
        if (newContent) {
            posts[index].content = newContent;
            localStorage.setItem('posts', JSON.stringify(posts));
            loadPosts();
        }
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
