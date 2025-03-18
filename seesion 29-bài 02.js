let ProductManager = {
    products: [],
    addProduct() {
        let id = this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
        let name = prompt("Nhập tên sản phẩm:");
        let price = +prompt("Nhập giá sản phẩm:");
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

        if (!name || isNaN(price) || !category || isNaN(quantity)) {
            alert("Dữ liệu nhập không hợp lệ!");
            return;
        }

        this.products.push({ id, name, price, category, quantity });
        alert("Sản phẩm đã được thêm!");
    },

    showProducts() {
        if (this.products.length === 0) {
            alert("Danh sách sản phẩm trống!");
        } else {
            console.log(this.products);
            alert("Danh sách sản phẩm đã hiển thị trên console!");
        }
    },

    showProductById() {
        let id = parseInt(prompt("Nhập ID sản phẩm cần xem:"));
        let product = this.products.find(p => p.id === id);

        if (product) {
            console.table(product);
            alert("Chi tiết sản phẩm đã hiển thị trên console!");
        } else {
            alert("Không tìm thấy sản phẩm!");
        }
    },

    updateProduct() {
        let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
        let product = this.products.find(p => p.id === id);

        if (product) {
            product.name = prompt("Nhập tên mới:", product.name) || product.name;
            product.price = +prompt("Nhập giá mới:", product.price) || product.price;
            product.category = prompt("Nhập danh mục mới:", product.category) || product.category;
            product.quantity = parseInt(prompt("Nhập số lượng mới:", product.quantity)) || product.quantity;
            alert("Sản phẩm đã được cập nhật!");
        } else {
            alert("Không tìm thấy sản phẩm");
        }
    },

    deleteProduct() {
        let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
        let index = this.products.findIndex(p => p.id === id);

        if (index !== -1) {
            if (confirm(`Bạn có chắc muốn xóa sản phẩm "${this.products[index].name}" không`)) {
                this.products.splice(index, 1);
                alert("Sản phẩm đã bị xóa");
            }
        } else {
            alert("Không tìm thấy sản phẩm");
        }
    },

    filterProductsByPrice() {
        let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
        let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));

        if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
            alert("Dữ liệu nhập không hợp lệ!");
            return;
        }

        let result = this.products.filter(p => p.price >= minPrice && p.price <= maxPrice);
        if (result.length > 0) {
            console.table(result);
            alert("Kết quả lọc sản phẩm đã hiển thị trên console!");
        } else {
            alert("Không tìm thấy sản phẩm trong khoảng giá này!");
        }
    },

    mainMenu() {
        while (true) {
            let choice = parseInt(prompt(
                "Chọn chức năng:\n" +
                "1. Thêm sản phẩm\n" +
                "2. Hiển thị danh sách sản phẩm\n" +
                "3. Xem chi tiết sản phẩm\n" +
                "4. Cập nhật sản phẩm\n" +
                "5. Xóa sản phẩm\n" +
                "6. Lọc sản phẩm theo giá\n" +
                "7. Thoát"
            ));

            switch (choice) {
                case 1: this.addProduct(); break;
                case 2: this.showProducts(); break;
                case 3: this.showProductById(); break;
                case 4: this.updateProduct(); break;
                case 5: this.deleteProduct(); break;
                case 6: this.filterProductsByPrice(); break;
                case 7: alert("Thoát chương trình"); return;
                default: alert("Lựa chọn không hợp lệ");
            }
        }
    }
};
ProductManager.mainMenu();