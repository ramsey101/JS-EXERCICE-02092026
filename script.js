// JavaScript pour la fonctionnalité d'ajout de produits

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addProductForm');
    const productSection = document.querySelector('.productSection');

    // Fonction pour créer une nouvelle carte produit
    function createProductCard(name, imageUrl, price) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        productDiv.innerHTML = `
            <h3>${name}</h3>
            <p>Description of ${name}.</p>
            <div>
                <div>
                    <img src="${imageUrl}" alt="${name} Image">
                </div>
                <span class="price">$${parseFloat(price).toFixed(2)}</span>
            </div>
            <div class="product-buttons">
                <button class="add-to-cart">Add to Cart</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        return productDiv;
    }

    // Gestionnaire d'événement pour le formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productImageUrl = document.getElementById('productImageUrl').value;
        const productPrice = document.getElementById('productPrice').value;
        

        const newProduct = createProductCard(productName, productImageUrl, productPrice);
        productSection.appendChild(newProduct);

        
        form.reset();

       
        alert('Produit ajouté avec succès !');
    });

    // Gestionnaire pour les boutons "Add to Cart" et "Delete"
    document.addEventListener('click', function(e) {
        // Bouton Add to Cart
        if (e.target.classList.contains('add-to-cart') || (e.target.tagName === 'BUTTON' && e.target.textContent === 'Add to Cart')) {
            const originalText = e.target.textContent;
            e.target.textContent = 'Ajouté !';
            e.target.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = '#007bff';
            }, 1500);
        }
        
        // Bouton Delete
        if (e.target.classList.contains('delete-btn')) {
            if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
                const productCard = e.target.closest('.product');
                productCard.remove();
            }
        }
    });
});