import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && email.indexOf("@") > -1) {
      setIsSubmitting(true); // Set submitting state to true
      onValidated({
        EMAIL: email
      });
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  useEffect(() => {
    if (status === 'sending') {
      // Wait for 2 seconds before showing success and refreshing the page
      setTimeout(() => {
        // Trigger page reload after 2 seconds
        window.location.reload();
      }, 2000);
    }
  }, [status]);

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe for latest updates</h3>
            {status === 'sending' && <Alert>Thank you for subscribing. </Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
