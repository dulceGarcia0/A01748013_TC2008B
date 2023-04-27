using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Giraffe : MonoBehaviour
{

    [SerializeField] private float upForce;
    [SerializeField] private Transform groundCheck;
    [SerializeField] private LayerMask ground;
    [SerializeField] private float radius;

    private Rigidbody2D giraffeRb;

    // Start is called before the first frame update
    void Start()
    {
        giraffeRb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {

        bool isGrounded = Physics2D.OverlapCircle(groundCheck.position, radius, ground);


        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (isGrounded)
            {
                giraffeRb.AddForce(Vector2.up * upForce); 
            }
        }
    }

    private void OnDrawGizmos() 
    {
        Gizmos.DrawWireSphere(groundCheck.position, radius);
    }

    private void OnCollisionEnter2D(Collision2D collision) 
    {
        if(collision.gameObject.CompareTag("Obstacle"))
        {
            GameManager.Instance.ShowGameOverScreen();
            Time.timeScale = 0f;
        }    
    }
}
