document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() !== '') {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = '<p>' + postContent + '</p>';
        document.getElementById('posts').appendChild(postElement);
        document.getElementById('post-content').value = '';
        
        // 将帖子内容保存到本地文件
        savePostToFile(postContent);
    } else {
        alert('请输入帖子内容！');
    }
});

function savePostToFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'post.txt';
    a.click();
    URL.revokeObjectURL(url);
}
