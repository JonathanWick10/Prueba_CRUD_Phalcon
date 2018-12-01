<?php

use Phalcon\Mvc\Model;

class Usuarios extends Model
{
	public $id;
    public $identificacion;
    public $nombre;
    public $fecha_de_nacimiento;
    public $genero;
    public $estado_civil;
    public $direccion;
    public $telefono;
}

