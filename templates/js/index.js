window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#result-btn').addEventListener('click', event => {
        const prod_files = document.querySelector('#products').files;
        const key_files = document.querySelector('#keys').files;

      // Send FormData
      const formData = new FormData();
      if (prod_files && prod_files.length > 0){
        formData.append('products', prod_files[0]);
      } else {
          alert('Must select file with products');
          return;
      }
      if (key_files && key_files.length > 0){
        formData.append('keys', key_files[0]);
      } else {
          alert('Must select file with keys');
          return;
      }

      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(() => {
        // Success message
        alert('Success!');
      })
      .catch(error => {
        console.error(error);
        // Fail message
        alert("error");
      })
      .finally(() => {
        console.log('filnally');
      });
    });
});