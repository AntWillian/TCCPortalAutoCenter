<?php

  class Mysql_db{
    private $serve;
    private $user;
    private $password;
    private $dataBaseName;


    public function __construct(){
      $this->server = "10.107.144.17";/*localhost*/
      $this->user = "root";
      $this->password = "bcd127";
      $this->dataBaseName = "db_portal";

    }
    public function Conectar(){
      try {
        $conexao = new PDO('mysql:host='.$this->server.';dbname='.$this->dataBaseName,
                            $this->user,$this->password);

                            return $conexao;
      } catch (PDOException $Error) {
          echo "erro ao conectar-se no banco de dados. <br>
                Linha do erro".$Erro->getLine()."<br>
                mensagen do erro:".$Erro->getMessage();
      }


    }

    public function Desconectar(){
        $conexao = null;
    }
  }

 ?>
