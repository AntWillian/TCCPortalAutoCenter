<?php

  class Mysql_db{
    private $serve;
    private $user;
    private $password;
    private $dataBaseName;


    public function __construct(){
<<<<<<< HEAD
      $this->server = "10.107.144.17";/*localhost*/
=======
      $this->server = "localhost";/*localhost*/
>>>>>>> a85b0cc4aa154f3435ef58716e9573ce324c66d6
      $this->user = "root";
      $this->password = "bcd127";
      $this->dataBaseName = "dbportal";

    }
    public function Conectar(){
      try {
        $conexao = new PDO('mysql:host='.$this->server.';dbname='.$this->dataBaseName,
                            $this->user,$this->password);

                            return $conexao;
      } catch (PDOException $Error) {
          echo "erro ao conectar-se no banco de dados. <br>
                Linha do erro".$Error->getLine()."<br>
                mensagen do erro:".$Error->getMessage();
      }


    }

    public function Desconectar(){
        $conexao = null;
    }
  }

 ?>
