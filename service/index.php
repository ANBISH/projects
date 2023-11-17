<?php
require_once "db/db.php";
require_once "Admin/Delivery.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $delivery_type = $_POST["delivery_type"];

    $delivery = new Delivery($_POST["width"],$_POST["height"],$_POST["length"],$_POST["weight"],$_POST["distance"]);

    echo "<script>alert('".$delivery->calculate_delivery_price($conn)."');</script>";
};
?>
<!DOCTYPE html>
<html>
<head>

    <link rel="stylesheet" href="css/main.css">
    <title>Розрахунок вартості доставки</title>
</head>
<body>
<div class="form-container">

        <form class="form" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <label>Розрахунок вартості доставки</label>

            <label>Ширина, см:</label>
            <input type="number" name="width" min="0" required><br>
            <label>Висота, см:</label>
            <input type="number" name="height" min="0" required><br>
            <label>Довжина, см:</label>
            <input type="number" name="length" min="0" required><br>
            <label>Вага, кг:</label>
            <input type="number" name="weight" min="0" required><br>
            <label>Тип доставки:</label>
            <select name="delivery_type">
                <option value="courier">Кур'єрська</option>
                <option value="post_office">До відділення</option>
            </select><br>
            <label>Відстань, км:</label>
            <input type="number" name="distance" min="0" required><br>

            <input type="submit" id="myBtn" class="button" value="Розрахувати вартість">
        </form>
    </div>
</body>
</html>
