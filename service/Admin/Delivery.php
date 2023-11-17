<?php

class Delivery
{
    private $width;
    private $height;
    private $length;
    private $vol;
    private $weight;
    private $distance;
    private $price;

    /**
     * @param $width
     * @param $height
     * @param $length
     * @param $weight
     * @param $distance
     */
    public function __construct($width, $height, $length, $weight,$distance)
    {
        $this->width = $width;
        $this->height = $height;
        $this->length = $length;
        $this->weight = $weight;
        $this->distance = $distance;
    }

    public function calculate_delivery_price($conn){
        $coeficient_v = 0;
        $coeficient_w = 0;
        $total = "Такі великі посилки не доставляємо";
        $this->vol = $this->height * $this->length * $this->width * 0.001;
        $sql = "SELECT * FROM `Delivery` WHERE ".$this->vol.">=min_volume AND ".$this->vol."<max_volume";
        $sql1 = "SELECT * FROM `Delivery` WHERE ".$this->weight.">=min_weight AND ".$this->weight."<max_weight";
        $result = mysqli_query($conn, $sql);
        $result1 = mysqli_query($conn,$sql1);
        if (mysqli_num_rows($result) > 0 and mysqli_num_rows($result1) > 0) {
            foreach ($result as $res){
                $coeficient_v=$res["coeficient"];
                $this->price = $res["cost"];
            }
            foreach ($result1 as $res){
                $coeficient_w=$res["coeficient"];
            }
            $total = "Вартість доставки: ". $this->price * $coeficient_w * $coeficient_v * $this->distance." грн.";
        } else {
            $coeficient_v = 0;
            $coeficient_w = 0;
        };
        return $total;
    }

}