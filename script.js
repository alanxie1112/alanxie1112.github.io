document.getElementById('post-button').addEventListener('click', function() {
    var postContent = document.getElementById('post-content').value;
    if (postContent.trim() !== '') {
        var postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = '<p>' + postContent + '</p>';
        document.querySelector('.posts').appendChild(postElement);
        document.getElementById('post-content').value = '';
    } else {
        alert('请输入帖子内容！');
    }
});
