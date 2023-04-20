/*
Eliminate prefabs that touch the "floor"
18 abril
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;


using UnityEngine;


public class Destroyer : MonoBehaviour
{
   void OnCollisionEnter2D(Collision2D col)
   {
    Destroy(col.gameObject);
   }
}
