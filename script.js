function convertToUppercaseAndValidate() {
    let inputField = document.getElementById('word');
    let inputValue = inputField.value;
    
    inputValue = inputValue.replace(/[^a-zA-Z]/g, '');

    inputField.value = inputValue.toUpperCase();
}