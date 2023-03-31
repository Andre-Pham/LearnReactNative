//
//  MyClass.swift
//  StateDemo
//
//  Created by Andre Pham on 31/3/2023.
//

import Foundation
import SwiftUI

class MyClass: ObservableObject {
    
    @Published var text: String
    
    init(text: String) {
        self.text = text
    }
    
}
