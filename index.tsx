<div className={styles.dummyHost}>

<button className={`${styles.loginMenuButton} ${loginMenuOpened ? styles.opened : ''}`}  onClick={this.toggleLoginDialog}>
                            <span className={styles.barIcon}></span>
                        </button>

                        <dialog className={`${styles.loginDialog} ${loginMenuOpened ? styles.opened : ''}`} >
                            <Form options={loginFormControlList}
                                  formTitle={'Credit Card Details'}
                                  handleChange={this.loginHandleChange}
                                  isFormDisabled={!this.state.loginFormIsValid}
                                  submitForm={this.submit}/>
                        </dialog>
                        
                        </div>
