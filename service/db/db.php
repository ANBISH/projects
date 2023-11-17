    <?php
            $servername = "localhost"; // Назва сервера бази даних
            $username = "root"; // Ім'я користувача бази даних
            $password = ""; // Пароль користувача бази даних
            $dbname = "delivery_service"; // Назва бази даних

            // Створення з'єднання з базою даних
            $conn = mysqli_connect($servername, $username, $password, $dbname);

            // Перевірка з'єднання
            if (!$conn) {
            die("Помилка з'єднання: " . mysqli_connect_error());
            }
?>
