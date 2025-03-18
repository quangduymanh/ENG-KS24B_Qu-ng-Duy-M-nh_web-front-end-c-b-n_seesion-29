let TaskManager = {
    tasks: [],
    addTask() {
        let id = this.tasks.length + 1;
        let name = prompt("Nhập tên công việc:");
        let description = prompt("Nhập mô tả:");
        let startTime = prompt("Nhập thời gian bắt đầu");
        let status = prompt("Nhập trạng thái (Chưa hoàn thành / Hoàn thành):");

        if (!name || !description || !startTime || !["Hoàn thành", "Chưa hoàn thành"].includes(status)) {
            alert("Dữ liệu không hợp lệ!");
            return;
        }

        this.tasks.push({ id, name, description, startTime, status });
        alert(`Công việc "${name}" đã được thêm!`);
    },

    showTasks() {
        if (this.tasks.length === 0) {
            alert("Danh sách công việc trống!");
            return;
        }
        console.log(this.tasks);
        alert("Danh sách công việc đã hiển thị trên console");
    },

    updateStatus() {
        let id = parseInt(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
        let task = this.tasks.find(t => t.id === id);

        if (!task) {
            alert("Không tìm thấy công việc!");
            return;
        }

        let newStatus = prompt("Nhập trạng thái mới (Chưa hoàn thành hoặc Hoàn thành):");
        if (!["Hoàn thành", "Chưa hoàn thành"].includes(newStatus)) {
            alert("Trạng thái không hợp lệ!");
            return;
        }

        task.status = newStatus;
        alert("Trạng thái công việc đã được cập nhật!");
    },

    filterTasks() {
        let status = prompt("Nhập trạng thái cần lọc (Hoàn thành / Chưa hoàn thành):");
        if (!["Hoàn thành", "Chưa hoàn thành"].includes(status)) {
            alert("Trạng thái không hợp lệ!");
            return;
        }

        let filteredTasks = this.tasks.filter(t => t.status === status);
        console.table(filteredTasks.length ? filteredTasks : "Không có công việc nào phù hợp.");
        alert("Danh sách lọc đã hiển thị trên console!");
    },

    sortTasks() {
        this.tasks.sort((a, b) => (a.status > b.status ? -1 : 1));
        alert("Công việc đã được sắp xếp!");
        this.showTasks();
    },

    mainMenu() {
        while (true) {
            let choice = parseInt(prompt(
                "Chọn chức năng:\n" +
                "1. Thêm công việc\n" +
                "2. Hiển thị danh sách công việc\n" +
                "3. Cập nhật trạng thái công việc\n" +
                "4. Lọc công việc theo trạng thái\n" +
                "5. Sắp xếp công việc theo trạng thái\n" +
                "6. Thoát"
            ));

            switch (choice) {
                case 1: this.addTask(); break;
                case 2: this.showTasks(); break;
                case 3: this.updateStatus(); break;
                case 4: this.filterTasks(); break;
                case 5: this.sortTasks(); break;
                case 6: alert("Thoát chương trình"); return;
                default: alert("Lựa chọn không hợp lệ");
            }
        }
    }
};
TaskManager.mainMenu();