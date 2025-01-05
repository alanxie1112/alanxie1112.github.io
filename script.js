window.onload = function() {
    loadPosts();
};

document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() !== '') {
        const newPost = {
            id: Date.now(),
            content: postContent
        };
        addPost(newPost);
        document.getElementById('post-content').value = '';
    } else {
        alert('请输入帖子内容！');
    }
});

function addPost(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <p>${post.content}</p>
        <button onclick="deletePost(${post.id})">删除</button>
    `;
    document.getElementById('posts').appendChild(postElement);
    savePosts();
}

function savePosts() {
    const posts = Array.from(document.querySelectorAll('.post')).map(post => {
        return {
            id: post.querySelector('button').getAttribute('onclick').match(/\d+/)[0],
            content: post.querySelector('p').textContent
        };
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.forEach(post => {
        addPost(post);
    });
}

function deletePost(id) {
    const postElement = document.querySelector(`div[onclick*="${id}"]`);
    if (postElement) {
        postElement.remove();
        savePosts();
    }
}
