/*
Create copies of a ball object to fall on the game scene
18 abril
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowBalls : MonoBehaviour
{
   /* [SerializeField] o public, pero prefiere prof [SerializeField]*/
    [SerializeField] GameObject ball;
    [SerializeField] float delay;
    [SerializeField] float limit;

    // Start is called before the first frame update
    void Start()
    {
        //Call the specified function at regular intervals
        InvokeRepeating("CreateBall", delay, delay);
    }

    void CreateBall()
    {
        // Generate a random position in X and over the view of the camera. For float
        Vector3 newPos = new Vector3(Random.Range(-limit, limit), 
                                    6.5f, 0);
        // Create a copy of the ball prefab
        Instantiate(ball, newPos, Quaternion.identity);
    }
}
